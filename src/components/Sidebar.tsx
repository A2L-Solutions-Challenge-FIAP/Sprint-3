import Header from "./SidebarHeader"
import SidebarItems from "./SidebarItems"


const Sidebar = () => {
  return (
    <nav className="shadow-md bg-blue-100 h-screen w-60 flex flex-col">
   
      <Header />
      <SidebarItems open={true} />

    </nav>
  )
}

export default Sidebar
