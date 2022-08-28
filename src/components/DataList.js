const DataList = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2>DataList</h2>
      <div>
        {data.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                border: "1px solid red",
                flexWrap: "wrap",
              }}
            >
              <div>{item.fields.Name}</div>
              <div>{item.fields.Notes}</div>
              <div>{item.fields.Status}</div>
              <div
                style={{
                  border: "1px solid yellow",
                  margin: 12,
                  flexWrap: "wrap",
                }}
              >
                {item.fields.TAKIJEDEN.map((el) => {
                  return <div key={el}>{el}</div>;
                })}
              </div>
              <div
                style={{
                  border: "1px solid green",
                  margin: 12,
                  flexWrap: "wrap",
                }}
              >
                {item.fields.qwerty.map((el) => {
                  return <div key={el}>{el}</div>;
                })}
              </div>
              <div
                style={{
                  border: "1px solid blue",
                  margin: 12,
                  flexWrap: "wrap",
                }}
              >
                {item.fields.selekty.map((el) => {
                  return <div key={el}>{el}</div>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataList;
