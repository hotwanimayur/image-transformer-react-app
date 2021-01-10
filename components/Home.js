import Link from 'next/link'


export default function Home() {
    return (
        <div className="container">
            <Link href="/"><button id ="backBtn" className="btn btn-outline-primary btn-sm" active role="button" aria-pressed="true"><h3><a>Home &larr;</a></h3></button></Link>


            <style jsx>{`
        .container {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          align-items: flex-center;
        }

        h3 {
            font-size: 1.1rem;
        }

        a{
            position: relative;
            top: 6px;
        }

        #backBtn {
            position: relative;
            right: 30px;
        } 

        .btn:hover{
          background-color: white;
        }

      `}</style>

            <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
    )
}
