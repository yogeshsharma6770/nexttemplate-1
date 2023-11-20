import Username from "./components/Username";
import Link from "next/link";
export default function Home() {
  return (
    <div className="form-main">
      <div className="form_data">
      <div className="P_heading">
    
        <h1 className="fill">Fill you form and save details</h1>
    
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages
           </p></div>
        <div className="main_form">
          <div className=''></div>
          <h1 className="signup" id="logo">Multi step Form</h1>
          <Username />
        </div>
      </div>
 
    </div>
  )
}

