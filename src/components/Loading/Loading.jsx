import loadingGIF from "./loading.gif";

const Loading = () => {
  return (
    <section className="loading-component text-center py-20">
      <div className="site-container">
        <img src={loadingGIF} alt="Loading" className="mx-auto" />
        <p className="text-2xl font-semibold">Loading...</p>
      </div>
    </section>
  );
};

export default Loading;
