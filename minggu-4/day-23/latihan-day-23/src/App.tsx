import React from "react";
import RegisterForm from "./components/RegisterForm";
import MultiStepForm from "./components/MultiStepForm";
import DynamicForm from "./components/DynamicForm";
import FileUploadForm from "./components/FileUploadForm";

const App: React.FC = () => {
  return (
    <div className="font-sans">
      <h1 style={{textAlign: "center", }}>Soal 1:</h1>
      <RegisterForm />
      <h1 style={{textAlign: "center"}}>Soal 2:</h1>
      <MultiStepForm />
      <h1 style={{textAlign: "center"}}>Soal 3:</h1>
      <DynamicForm />
      <h1 style={{textAlign: "center"}}>Soal 4:</h1>
      <FileUploadForm />
    </div>
  );
};

export default App;