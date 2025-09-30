import React, { useState } from "react";
import Button from "../components/Button";

type Lembrete = {
  id: string;
  titulo: string;
  quando: string;
  enviado: boolean;
};

const uid = () => Math.random().toString(36).slice(2, 9);
const agoraMais1h = () =>
  new Date(Date.now() + 60 * 60 * 1000).toISOString().slice(0, 16);

function seed(): Lembrete[] {
  const base = new Date();
  return [
    {
      id: uid(),
      titulo: "Confirmar teleconsulta",
      quando: new Date(+base + 2 * 60 * 60 * 1000).toISOString(),
      enviado: false,
    },
    {
      id: uid(),
      titulo: "Enviar pesquisa de satisfação",
      quando: new Date(+base + 24 * 60 * 60 * 1000).toISOString(),
      enviado: false,
    },
  ];
}

export default function Dashboard() {
  const [lembretes, setLembretes] = useState<Lembrete[]>(seed());
  const [titulo, setTitulo] = useState("");
  const [quando, setQuando] = useState(agoraMais1h());

  function adicionar(e: React.FormEvent) {
    e.preventDefault();
    if (!titulo.trim()) return;
    const novo: Lembrete = {
      id: uid(),
      titulo: titulo.trim(),
      quando: new Date(quando).toISOString(),
      enviado: false,
    };
    setLembretes((prev) => [novo, ...prev]);
    setTitulo("");
    setQuando(agoraMais1h());
  }

  function alternarEnviado(id: string) {
    setLembretes((prev) =>
      prev.map((l) => (l.id === id ? { ...l, enviado: !l.enviado } : l))
    );
  }

  function excluir(id: string) {
    setLembretes((prev) => prev.filter((l) => l.id !== id));
  }

  const ordenados = [...lembretes].sort(
    (a, b) => +new Date(a.quando) - +new Date(b.quando)
  );

  const total = lembretes.length;
  const pendentes = lembretes.filter((l) => !l.enviado).length;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      <header className="sticky top-0 bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto p-4 flex items-center gap-3">
          <h1 className="text-xl  text-blue-900 font-bold">Sistema de lembretes</h1>
          <div className="ml-auto text-xs">
            <span>
              Total: {total} • Pendentes: {pendentes}
            </span>
          </div>
        </div>
      </header>

      
      <main className="max-w-3xl mx-auto p-4 grid gap-4">
      
        <section className="bg-white border border-gray-200 rounded-xl p-4">
          <h2 className="font-semibold mb-3">Novo lembrete</h2>
          <form onSubmit={adicionar} className="grid gap-3">
            <div>
              <label className="block mb-1 text-xs text-slate-600">
                Título *
              </label>
              <input
                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Ex.: Confirmar teleconsulta"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-xs text-slate-600">
                Data e hora
              </label>
              <input
                className="w-full px-3 py-2 border border-slate-300 rounded-lg"
                type="datetime-local"
                value={quando}
                onChange={(e) => setQuando(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button variant= "primary">
                Adicionar
              </Button>
              <Button variant="secondary"
                type="button"
                onClick={() => {
                  setTitulo("");
                  setQuando(agoraMais1h());
                }}
              >
                Limpar
              </Button>
            </div>
          </form>
        </section>

        
        <section className="bg-white border border-gray-200 rounded-xl p-4">
          <h2 className="font-semibold mb-3">Lembretes</h2>
          {ordenados.length === 0 ? (
            <p className="text-sm text-slate-500">Nenhum lembrete por aqui.</p>
          ) : (
            <ul className="list-none p-0 m-0 grid gap-2">
              {ordenados.map((l) => (
                <li
                  key={l.id}
                  className="border border-gray-200 rounded-lg p-3 grid gap-1.5"
                >
                  <div className="flex items-center gap-2">
                    <strong
                      className={l.enviado ? "line-through" : ""}
                    >
                      {l.titulo}
                    </strong>
                    <span className="ml-auto text-xs text-slate-600">
                      {new Date(l.quando).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <Button variant="secondary"
                      className="px-3 py-2 rounded-lg border border-gray-200  text-slate-900 text-sm"
                      onClick={() => alternarEnviado(l.id)}
                    >
                      {l.enviado ? "Voltar p/ pendente" : "Marcar enviado"}
                    </Button>
                    <Button variant="danger"
                      className="px-3 py-2 "
                      onClick={() => excluir(l.id)}
                    >
                      Excluir
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <footer className="text-center text-xs text-slate-500 py-4">
          
      </footer>
    </div>
  );
}
