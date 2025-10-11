import FetchPost from "./components/FetchPost";
import AxiosUser from "./components/AxiosUser";
import FetchWithAbort from "./components/FetchWithAbort";
import FilteredUsers from "./components/FilteredUsers";
import FetchWithLoadingError from "./components/FetchWithLoadingError"; // Tambahan

function App() {
  return (
    <div className="app">
      <h1>tugas react js day 10</h1>

      <section>
        <h2>Tugas 1: Fetch API</h2>
        <FetchPost />
      </section>

      <section>
        <h2>Tugas 2: Axios</h2>
        <AxiosUser />
      </section>

      <section>
        <h2>Tugas 3: Loading State & Error Handling</h2>
        <FetchWithLoadingError /> {/* Tambahan */}
      </section>

      {/* <section>
        <h2>Tugas 4: AbortController</h2>
        <FetchWithAbort />
      </section>

      <section>
        <h2>Tugas 5: Manipulasi Data JSON</h2>
        <FilteredUsers />
      </section> */}
    </div>
  );
}

export default App;
