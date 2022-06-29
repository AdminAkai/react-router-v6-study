const Dashboard = ({ user }) => {
  return (
    <section className='section'>
      <h4>Hello, {user && user.name}</h4>
    </section>
  );
};
export default Dashboard;
