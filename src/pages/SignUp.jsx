import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const InputGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled {
    background-color: #a0a0a0;
  }
`;

const ToggleButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #6c757d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export default function SignUp() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    console.log("id:", id);
    console.log("password:", password);
    console.log("nickname:", nickname);
  };

  return (
    <Container>
      <InputGroup>
        <label htmlFor="id">아이디</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder="아이디"
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
      </InputGroup>
      <InputGroup>
        <label htmlFor="nickname">닉네임</label>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임"
        />
      </InputGroup>
      <Button onClick={handleRegister}>회원가입</Button>
      <ToggleButton onClick={() => navigate("/login")}>돌아가기</ToggleButton>
    </Container>
  );
}
