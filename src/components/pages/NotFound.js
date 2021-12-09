import { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { PAGE_NOT_FOUND } from '../../util/reason';

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/', { state: { reason: PAGE_NOT_FOUND } });
  }, [navigate]);

  return (
    <div></div>
  );
}

export default NotFound;