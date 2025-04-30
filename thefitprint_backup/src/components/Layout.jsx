export default function Layout(props) {
  const { children } = props;
  
  const header = (
    <header>
      <h1 className="text-gradient">The FitPrint </h1>
      <p><strong>30 Simple Workouts Program</strong></p>
    </header>
  )
  
  const footer = (
    <footer>
      <p>Created by <a href="https://moamaan.netlify.app" target="_blank">Mohammed Amaan</a></p>
    </footer>
  )

  return (
    <>
      {header}
      {children}
      {footer}
    </>
  )
}
