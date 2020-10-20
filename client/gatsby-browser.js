import React from "react"
import { LangProvider } from "./src/context/LangContext"

export const wrapRootElement = ({ element }) => (
  <LangProvider>{element}</LangProvider>
)