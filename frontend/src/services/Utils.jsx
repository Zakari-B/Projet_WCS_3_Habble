const getDropList = () => {
  const year = new Date().getFullYear();
  return Array.from(new Array(51), (v, i) => (
    <option key={i} value={year - i}>
      {year - i}
    </option>
  ));
};

export default getDropList;
