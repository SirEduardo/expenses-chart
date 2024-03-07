import './App.css'



function App() {

  return (
    <div className='container'>
      <header>
        <div className='data'>
        <p>My balance</p>
        <p  className='balance'>$921.48</p>
        </div>
        <div className='dots-box'>
        <img src='../images/logo.svg' alt='logo'></img>
        </div>
      </header>
      <article>
        <h1>Spending-Last 7 days</h1>
       <div className='chart'>
        
       </div>
        <footer>
        <div className='total'>
          <p>Total this month</p>
          <strong>$478.33</strong>
        </div>
        <div className='last'>
          <strong>+2.4%</strong>
          <p>from last month</p>
        </div>
        </footer>
      </article>
      
    </div>
  )
}

export default App
