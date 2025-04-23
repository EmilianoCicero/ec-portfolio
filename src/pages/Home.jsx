import Header from '../components/Header'
import Content from '../components/Content'
import '../styles/layout.css'

export default function Home() {
    return (
      <div className="layout-wrapper">
        <div className="layout">
          <Header />
          <Content />
        </div>
      </div>
    )
  }