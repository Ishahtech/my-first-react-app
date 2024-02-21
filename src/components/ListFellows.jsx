

const styles = {
  marginTop: "20px",
  backgroundColor: "gray"
};

function ListFellows({ users }) {
  if (!users || users.length === 0) {
    return (
      <div>
        <p>No Fellows Data Available</p>
      </div>
    );
  }
  return (
    <>
      <h1 style={{ marginTop: "50px", borderTop: "1px solid red" }}>
        List of Fellows
      </h1>
      <div>{users.map((item) => ( 

        <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.track} </p>
            <p>{item.city} </p>
         </div>
      )
      )} </div>
    </>
  );
}

export default ListFellows;
