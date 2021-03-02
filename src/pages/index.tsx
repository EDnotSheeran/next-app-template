interface Props {
  toggleTheme(): void
}

const Home: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <>
      <div>Hello World</div>
      <button onClick={toggleTheme}>muda thema</button>
    </>
  )
}

export default Home
