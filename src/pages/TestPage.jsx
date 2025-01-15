import { useNavigate, useParams } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import img from '../assets/react.svg';

function TestPage() {
  const { param } = useParams();
  const navigate = useNavigate();

  return(
    <>
      <h2> Test Page</h2>
      <p>Obtained param: '{param}'</p>
      <div href="">
        <img src={img} className="logo" alt="React logo" />
      </div>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </>
  )
}

export default TestPage;