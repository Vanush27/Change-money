import React, {useState, useEffect} from 'react';

import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import {styles} from "./styles";

const FormattedCurrency = (props) => {
    const currencyType = props.type === 'usd' ? '🇺🇸 USD' : '🇦🇲 AMD';

    const formatter = new Intl.NumberFormat(props.type, {
        currency: props.type,
        style: 'currency',
    });

    const formattedCurrency = `${formatter.format(props.value)} ${currencyType}`;

    return (
        <Text style={styles.currencyText}>
            {formattedCurrency}
        </Text>
    );
};

const ConversionTypeButton = (props) => {
    const backgroundColor = props.fromCurrency === props.from && props.toCurrency === props.to ? 'lightblue' : null;
    const buttonStyle = {backgroundColor: backgroundColor};

    const fromFlag = props.from === 'usd' ? '🇺🇸 USD' : '🇦🇲 AMD';
    const toFlag = props.to === 'usd' ? '🇺🇸 USD' : '🇦🇲 AMD';

    return (
        <TouchableOpacity
            onPress={() => props.setConversionCurrencies(props.from, props.to)}
            style={[styles.button, buttonStyle]}
        >
            <Text style={styles.buttonText}>{fromFlag} to {toFlag}</Text>
        </TouchableOpacity>
    );
};

export default function Current() {
    const [fromCurrency, setFromCurrency] = useState('amd');
    const [toCurrency, setToCurrency] = useState('usd');
    const [currentCurrencyValue, setFromCurrencyValue] = useState(0);
    const [convertedCurrencyValue, setConvertedValue] = useState(0);


    const convertCurrency = () => {
        let value;
        if (fromCurrency === 'amd') {
            value = currentCurrencyValue / 395;
        } else {
            value = 395 * currentCurrencyValue;
        }
        setConvertedValue(value);
    };

    useEffect(convertCurrency);

    const setConversionCurrencies = (from, to) => {
        setToCurrency(to);
        setFromCurrency(from);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.prompt}>
                Please enter the value of the currency you want to convert
            </Text>
            <TextInput
                autoFocus
                keyboardType="number-pad"
                selectionColor="red"
                style={styles.inputStyle}
                placeholder="100,000,000 AMD"
                onChangeText={setFromCurrencyValue}
            />
            <ConversionTypeButton
                to="usd"
                from="amd"
                toCurrency={toCurrency}
                fromCurrency={fromCurrency}
                setConversionCurrencies={setConversionCurrencies}
            />
            <ConversionTypeButton
                to="amd"
                from="usd"
                toCurrency={toCurrency}
                fromCurrency={fromCurrency}
                setConversionCurrencies={setConversionCurrencies}
            />
            <Text>
                Current currency:
            </Text>
            <FormattedCurrency
                type={fromCurrency}
                value={currentCurrencyValue}
            />
            <Text>
                Conversion currency:
            </Text>
            <FormattedCurrency
                type={toCurrency}
                value={convertedCurrencyValue}
            />
        </View>
    );
};
