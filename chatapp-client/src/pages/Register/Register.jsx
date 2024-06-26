import { useContext } from "react";
import { Alert, Button, Col, Form, Row, Stack } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const { registerInfo, updateRegisterInfo, registerUser, isError, isLoading } = useContext(AuthContext);

  return (
    <>
      <Form onSubmit={registerUser}>
        <Row
          style={{
            height: "100vh",
            justifyContent: "center",
            paddingTop: "10%",
          }}
        >
          <Col xs={6}>
            <Stack gap={3}>
              <h2 className="text-center">Register</h2>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, name: e.target.value })
                }
              />
              <Form.Control
                type="email"
                placeholder="Enter your email"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, email: e.target.value })
                }
              />
              <Form.Control
                type="password"
                placeholder="Enter your password"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo,password: e.target.value})
                }
              />
              <Button variant="primary" type="submit">
                {isLoading ? "Creating your account" : "Register"}
              </Button>
              {
                isError && (
                  <Alert variant="danger">
                    <p>{isError?.message}</p>
                  </Alert>
                )
              }
            </Stack>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Register;
