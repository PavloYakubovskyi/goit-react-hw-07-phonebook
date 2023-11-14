import { LoaderContainer } from 'components/App/App.styled';
import { RotatingLines } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <LoaderContainer>
      {' '}
      <RotatingLines
        strokeColor="grey"
        strokeWidth="2"
        animationDuration="0.75"
        width="25"
        visible={true}
      />
    </LoaderContainer>
  );
};
