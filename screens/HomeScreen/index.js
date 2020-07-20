import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    FlatList,
    Image
} from 'react-native';
import Button from '../../components/Button';
import ChoiceCard from '../../components/choiceCard';

const CHOICES = [
    {
        name: 'rock',
        uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png'
    },
    {
        name: 'paper',
        uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png'
    },
    {
        name: 'scissors',
        uri:
            'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png'
    }
];

const randomComputerChoice = () => {
    return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

const getRoundOutcome = userChoice => {
    const computerChoice = randomComputerChoice().name;
    let result;

    if (userChoice === 'rock') {
        result = computerChoice === 'scissors' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'paper') {
        result = computerChoice === 'rock' ? 'Victory!' : 'Defeat!';
    }
    if (userChoice === 'scissors') {
        result = computerChoice === 'paper' ? 'Victory!' : 'Defeat!';
    }

    if (userChoice === computerChoice) result = 'Tie game!';
    return [result, computerChoice];
};

const Home = ({ navigation }) => {
    const [gamePrompt, setGamePrompt] = useState('Fire');
    const [userChoice, setUserChoice] = useState({});
    const [computerChoice, setComputerChoice] = useState({});
    const [numberOfGame, setNumberOfGame] = useState(0);
    const [playerPoint, setPlayerPoint] = useState(0);
    const [history, setHistory] = useState([]);

    // <View style={styles.modal}>
    //     <FlatList
    //         data={history}
    //         renderItem={renderItem}
    //         keyExtractor={item => item.id}
    //     />
    // </View>

    // const renderItem = ({ item }) => {

    //     return (
    //         <View>
    //             <Image source={item.userChoice.uri} />
    //             <Text>{item.result}</Text>
    //             <Image source={item.computerChoice.uri} />
    //         </View>
    //     );
    // };

    const onPress = playerChoice => {
        const [result, compChoice] = getRoundOutcome(playerChoice);
        const newUserChoice = CHOICES.find(choice => choice.name === playerChoice);
        const newComputerChoice = CHOICES.find(choice => choice.name === compChoice);

        setGamePrompt(result);
        setUserChoice(newUserChoice);
        setComputerChoice(newComputerChoice);
        setNumberOfGame(numberOfGame + 1);
        let color = "black"
        if (result != "Defeat!") {
            setPlayerPoint(playerPoint + 1);
            color = "green"
        } else {
            color = "red"
        }

        setHistory([...history, {
            id: numberOfGame + 1,
            userChoice: newUserChoice.uri,
            computerChoice: newComputerChoice.uri,
            result,
            color
        }])
    }

    const getResultColor = () => {
        if (gamePrompt === 'Victory!') return 'green';
        if (gamePrompt === 'Defeat!') return 'red';
        return 'black';
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textGameDescription}>Played {numberOfGame}</Text>
                <Text style={[styles.textGameDescription, { color: getResultColor() }]}>{gamePrompt}</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("History", { history }) }}>
                    <Text style={styles.textGameDescription}>Result</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.choicesContainer}>
                <ChoiceCard player="Player" point={playerPoint} choice={userChoice} />
                <Text style={{ color: '#250902' }}>vs</Text>
                <ChoiceCard player="Computer" point={numberOfGame - playerPoint} choice={computerChoice} />
            </View>
            {CHOICES.map(choice => {
                return <Button name={choice.name} key={choice.name} onPress={onPress} />
            })}
        </View>
    )
}

export default Home;