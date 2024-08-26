const VocabLoading = () => {
  const loadingElements = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <section className="space-y-3">
      {loadingElements.map((_, index) => (
        <aside key={index} className="grid gap-2 grid-cols-2">
          <span className="w-full h-6 animate-pulse bg-gray-200 rounded-md"></span>
          <span className="w-full h-6 animate-pulse bg-gray-200 rounded-md"></span>
        </aside>
      ))}
    </section>
  );
};

export default VocabLoading;
