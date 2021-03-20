export default function Users() {
  return (
    <div className="py-2 px-3">
      <h5>Welcome!</h5>
      <div className="px-5">
        <div>
          This website is using APIs from{" "}
          <a href="https://jsonplaceholder.typicode.com/" target="_blank">
            JSONPlaceholder
          </a>
        </div>
        <div>
          Made with purpose of learning : <br />
          <ul>
            <li>
              <a href="https://nextjs.org/" target="_blank">
                Next.js
              </a>
            </li>
            <li>
              <a href="https://swr.vercel.app/" target="_blank">
                swr
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
