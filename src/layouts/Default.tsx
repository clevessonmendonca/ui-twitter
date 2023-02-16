import { Sidebar } from "../components/Sidebar";

export const Default = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content"></div>
    </div>
  );
};
