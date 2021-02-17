import React, {FC} from 'react';
import logo from './logo.svg';
import './App.css';

type AppProps = {
  sendSearchQuery?(): void;
}

const App: FC<AppProps> =({sendSearchQuery = () =>undefined}) => {
  const [searchValue, setSearchValue] = React.useState<string>()


  const onSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value
  }

  const search = () => {
    sendSearchQuery()
  }

  return (
    <div>
      <input value={searchValue} type="text" name="search" onChange={onSearchInput} />
      <button onClick={search} >Search</button>
    </div>
  );
}

export default App;
