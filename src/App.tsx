import { useCallback, useState } from 'react';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Menu from './components/menu/Menu';
import Main from './components/main/Main';
import data from '../api/discover.json';
import {IDataItems} from './interface';
import './Media.scss';

const App: React.FC = () => {
  const [searchStatus, setSearchStatus] = useState<boolean>(false)
  const [searchData, setSearchData] = useState<Array<IDataItems>>(data.items)
  const [term, setTerm] = useState<string>('');
  

  const changeSearchStatus = useCallback(
    (status:boolean) => {
      setSearchStatus(status)
    },
    [setSearchStatus])

    const searching = useCallback(
      (data: Array<IDataItems>) => {
        setSearchData(data)
      },
      [setSearchData])
    
  const searchContent = (data: Array<IDataItems>, term: string) => {
    if( term.length === 0 && searchStatus) {
      return []
    }
    if(term.length === 0 && !searchStatus) {
      return data
    }
    return data.filter((item: IDataItems) => {
      return item.title.toLowerCase().indexOf(term.toLowerCase()) > -1
    })
  }
  

  const searchedData = searchContent(searchData, term)

  return (
    <div className="App">
        <Menu changeSearchStatus={changeSearchStatus} />
        <Main changeSearchStatus={changeSearchStatus} searchData={searchedData} searching={searching} searchStatus={searchStatus} setTerm={setTerm} term={term}/>
    </div>
  );
}


export default App;
