import React, { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FullPage = styled.div`
  width: 100%;
  background-color: var(--color-grey-50);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ProtectedRoute({ children }) {
  // 1- load authenticated user
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  // 2- not authroized redirect to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  // 3- show spinner while loading
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4-authorized render app
  if (isAuthenticated) return children;
}
