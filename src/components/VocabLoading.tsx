const VocabLoading = () => {
  const loadingElements = [1, 2, 3, 4, 5];

  return (
    <section className="space-y-3">
      {loadingElements.map((_, index) => (
        <aside key={index} className="grid gap-2 grid-cols-2">
          <span className="w-36 h-6 animate-pulse bg-gray-200 rounded-md"></span>
          <span className="w-36 h-6 animate-pulse bg-gray-200 rounded-md"></span>
        </aside>
      ))}
    </section>
  );
};

export default VocabLoading;
