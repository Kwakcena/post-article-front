import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

const App = () => {
  const [form, setForm] = useState({
    subject: "",
    content: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const accessToken = window.localStorage.getItem("access_token");
    const url = "http://localhost:3000/cafe/post";

    try {
      await axios.post(
        url,
        {
          subject: form.subject,
          content: form.content,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>게시글 작성하기</h1>
      <form onSubmit={handleSubmitForm}>
        <label>
          제목:
          <input type="text" id="subject" onChange={handleChange} />
        </label>
        <br />
        <label>
          내용:
          <input type="text" id="content" onChange={handleChange} />
        </label>
        <br />
        <button type="submit">제출하기</button>
      </form>
    </div>
  );
};

export default App;
