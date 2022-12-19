import CharacterCard from '../CharacterCards/CharacterCard'
import classes from './ListOfCharacters.module.css'

const ListOfCharacters = ({ pageLoaded, data }) => {

    return (
        <>
            {data[0] === 0 ?

                (<>"No Data Found!!!"</>)

                :

                (<div className={classes.grid} >
                    {
                        data.map((ele) => (
                            <CharacterCard pageLoaded={pageLoaded} data={ele} key={ele.id}></CharacterCard>
                        ))
                    }
                </div >)
            }
        </>
    )
}

export default ListOfCharacters