# Infix to Postfix using Shunting Yard Algorithm

Transform mathematical formula from Infix notation to Postfix notation.

## Rules
 - All constants start with Upper case.
 - Functions starts with a lower character or an underscore, followed by any number of underscore, alphabet, and number.
 - `-2^2` means `(-2)^2`.
 - Doesn't support unary operators.

## Usage

```bash
$ npm run main
```

## Examples

```
Input Formula: 1 + 1
1 1 + 
```

```
Input Formula: 3 + 4 * 2 / (1 - 5) ^ 2 ^ 3
3 4 2 * 1 5 - 2 3 ^ ^ / + 
```

```
Input Formula: sin (max (2, 3) / 3 * Pi)
2 3 max 3 / Pi * sin 
```