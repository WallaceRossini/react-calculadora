import { Container, Content, Row } from "./styles";

import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handldeAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? number : prev + number}`);
  };

  const handleOperation = (op) => {
    if (firstNumber === "0") {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
      setOperation(op);
    } else {
      handleEquals();
      setOperation(op);
    }
  };

  const handleEquals = () => {
    if (operation && firstNumber !== "0") {
      const num1 = parseFloat(firstNumber);
      const num2 = parseFloat(currentNumber);
      let result = 0;

      switch (operation) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
        default:
          return;
      }

      setCurrentNumber(result.toString());
      setFirstNumber("0");
      setOperation("");
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="x" onClick={() => handleOperation("*")} />
          <Button label="/" onClick={() => handleOperation("/")} />
          <Button label="C" onClick={() => handleOnClear()} />
          <Button label="X" />
        </Row>
        <Row>
          <Button label="7" onClick={() => handldeAddNumber("7")} />
          <Button label="8" onClick={() => handldeAddNumber("8")} />
          <Button label="9" onClick={() => handldeAddNumber("9")} />
          <Button label="-" onClick={() => handleOperation("-")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handldeAddNumber("4")} />
          <Button label="5" onClick={() => handldeAddNumber("5")} />
          <Button label="6" onClick={() => handldeAddNumber("6")} />
          <Button label="+" onClick={() => handleOperation("+")} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handldeAddNumber("1")} />
          <Button label="2" onClick={() => handldeAddNumber("2")} />
          <Button label="3" onClick={() => handldeAddNumber("3")} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
