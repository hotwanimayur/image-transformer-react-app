import Head from 'next/head'
import Link from 'next/link'

export default function App() {
  return (
    <div className="container">
      <Head>
        <title>Image Transformation App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Image Transformation App using React: Next.js
        </h1>

        <p className="description">
          Here is what you can do with images
        </p>

        <div className="grid">
            <div className="card">
            <h3><Link href="/resize-image/ResizeImage"><a>Resize Image &rarr;</a></Link></h3>
            <p>You can resize a image by changing width and height.</p>
            </div>

            <div className="card">
            <h3><Link href="/change-image-format/ChangeImageFormat"><a>Change Image Format &rarr;</a></Link></h3>
            <p>Convert a png/raw or other images to jpg/tiff or other formats.</p>
            </div>

            <div className="card">
            <h3><Link href="/crop-image/CropImage"><a>Crop Image &rarr;</a></Link></h3>
            <p>Crop any Image using various crop parameters.</p>
            </div>

            <div className="card">
            <h3><Link href="/rotate-image/RotateImage"><a>Rotate Image &rarr;</a></Link></h3>
            <p>Rotate any image by providing a angle of Rotation.</p>
            </div>

            <div className="card">
            <h3><Link href="/apply-grayscale-filter/ApplyGrayscaleFilter"><a>Apply Grayscale Filter &rarr;</a></Link></h3>
            <p>Apply Gray Scale Filter to any image.</p>
            </div>

            <div className="card">
            <h3><Link href="/posterize-image/PosterizeImage"><a>Posterize Image &rarr;</a></Link></h3>
            <p>Posterize any image from one colorspace to other.</p>
            </div>
        </div>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0.3rem;
          line-height: 1.15;
          font-size: 2rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 1rem;
        }

        .card {
          background-color: white;
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
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
            background-color: aliceblue;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
