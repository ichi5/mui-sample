import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { RenderInputParams } from '@material-ui/lab/Autocomplete';

interface FilmOptionType {
    title: string;
    year: number;
}

const films: FilmOptionType[] = [
    { title: 'TheShawshankRedemption', year: 1994 },
    { title: 'TheGodfather', year: 1972 },
    { title: 'TheGodfather:PartII', year: 1974 },
    { title: 'TheDarkKnight', year: 2008 },
    { title: '12AngryMen', year: 1957 },
    { title: `Schindler'sList`, year: 1993 },
    { title: `PulpFiction`, year: 1994 },
    { title: `TheLordOfTheRings:TheReturnOfTheKing`, year: 2003 },
    { title: `TheGood,theBadandtheUgly`, year: 1966 },
    { title: `FightClub`, year: 1999 },
];

const useStyles = makeStyles(() =>
    createStyles({
        popper: {
            wordBreak: 'break-all',
        },
    }),
);

const ComboBox = () => {
    const classes = useStyles();
    return (
        <Autocomplete
            classes={{ popper: classes.popper }}
            options={films}
            getOptionLabel={(option: FilmOptionType) => option.title}
            renderInput={(params: RenderInputParams) => (
                <TextField {...params} label="Combo box" variant="outlined" fullWidth />
            )}
        />
    );
};

export default ComboBox;
