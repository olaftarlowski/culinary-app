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
      <div style={{ textAlign: "justify", padding: 100 }}>
        <p>
          Sed at condimentum felis, id ullamcorper dolor. Etiam convallis erat
          in metus scelerisque pulvinar. Curabitur mollis varius ipsum eget
          mattis. Curabitur condimentum lobortis sem, ut tincidunt nibh faucibus
          vel. Vestibulum cursus lobortis viverra. Curabitur a hendrerit est.
          Mauris eleifend, enim ac interdum varius, mi ante molestie dolor,
          posuere accumsan risus eros quis lorem. Aliquam eu mi mattis, pulvinar
          urna id, gravida dolor. Aenean pharetra tristique lectus, volutpat
          mollis velit scelerisque vitae. Nunc non orci quis orci venenatis
          lacinia quis sed erat. Duis lobortis lacus ex, ut bibendum dolor
          porttitor in. Proin dictum dapibus enim, at feugiat purus blandit at.
          Nullam eget purus rhoncus, rhoncus nunc ut, ultrices sapien. Vivamus
          et odio convallis, blandit libero sed, blandit neque.
        </p>

        <p>
          Quisque feugiat porttitor sapien a feugiat. Aenean mollis hendrerit
          faucibus. Integer nec maximus erat, in porta odio. Pellentesque lacus
          est, lacinia non elementum at, dictum vitae mi. Morbi eget mauris
          dapibus, commodo magna sit amet, ultricies velit. Proin malesuada odio
          turpis, eget aliquam nulla congue vitae. Nullam lacinia suscipit
          eleifend. Vestibulum ac consectetur turpis, eget vehicula justo.
          Quisque quis volutpat nisl.
        </p>
      </div>
    </div>
  );
};

export default DataList;
