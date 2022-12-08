import CharacterCard from '../CharacterCards/CharacterCard'
import classes from './ListOfCharacters.module.css'

const ListOfCharacters = ({ data }) => {

    return (
        <>
            {data[0] === 0 ?

                (<>"No Data Found!!!"</>)

                :

                (<div className={classes.grid} >
                    {
                        data.map((ele) => (
                            <CharacterCard data={ele} key={ele.id}></CharacterCard>
                        ))
                    }
                </div >)
            }
        </>
    )
}

export default ListOfCharacters