import React, { Component } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <ThemedButton />
      <br />
      {theme.background }
      <br /> 
      {theme.foreground}
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      <ThemedButtonSon />
    </button>
  );
}
function ThemedButtonSon() {
  const theme = useContext(ThemeContext);
  return (
    <>I am styled by theme context! {theme.background+theme.foreground}</>
  );
}

export default App
