import { useState, useEffect } from "react";
import axiox from "axios";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [selectData, setSelectData] = useState([]);
  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    let processing = true;
    axioxFecthData(processing);
    return () => {
      processing = false;
    };
  }, []);

  // const fetchData = async (processing) => {
    // const option = {
    //   method: "POST",
    //   header: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify({ email: email, message: message }),
    // };
  //   await fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (processing) {
  //         setSelectData(data);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  const axioxFecthData = async (processing) => {
    // const options = {
    //   email: email,
    //   message: message,
    // };
    await axiox
      .get("http://localhost:4000/users")
      .then((res) => {
        if (processing) {
          setSelectData(res.data);
        }
      })
      .catch((err) => console.log(err));
  };
  const axioxPostData=async()=>{
const postData={
  email:email,
  website:selectValue,
  message:message

}
await axiox.post('http://localhost:4000/contact',postData).then(res => setError(<p className="success">{res.data}</p>))
  }

  const SelectDropdown = () => {
    return (
      <select
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        {selectData?.map((item) => (
          <option value={item.website} key={item.website}>
            {item.website}
          </option>
        ))}
      </select>
    );
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Fix the typo here (preventDefault, not preventDefualt)
    console.log(email + " | " + message + " | " + selectValue);
    if (!message) {
      setError(
        <p className="required"> Message is empty. Please type a message</p>
      );
    } else {
      setError("");
    }
    setError('')
    axioxPostData()
  };
 

  return (
    <>
      <h1>Contact Us</h1>
      <form className="contactForm">
        <label>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>How Did you Hear About Us</label>

        {/* <option>Google Websearch</option>
          <option>From a freind</option> */}
        <SelectDropdown />
        <label>Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {error}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}
