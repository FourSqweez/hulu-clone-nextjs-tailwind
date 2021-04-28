import Thumbnail from './Thumbnail'

export default function Results({ results }) {
  return (
    <div
      className="px-5 my-10 sm:grid md:grid-cols-2 
    lg:grid-cols-3 3xl:flex flex-wrap"
    >
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  )
}
