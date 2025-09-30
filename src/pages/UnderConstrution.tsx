interface Props {
  page: string;
}

const UnderConstruction = ({ page }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {page} – Em construção 🚧
      </h1>
      <p className="text-gray-600">
        Estamos trabalhando para trazer esta página em breve.
      </p>
    </div>
  );
};

export default UnderConstruction;
