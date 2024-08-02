const codesData = [
    {
        code: `def simple_caesar_cipher():
    print("Simple Caesar Cipher")
    name = input("Enter word: ")
    encrypted = ""
    decrypted = ""
    key = int(input("Enter key (0-25): "))
    for letter in name:
        if letter.isalpha():
            shift = ord('A') if letter.isupper() else ord('a')
            encrypted += chr((ord(letter) - shift + key) % 26 + shift)
        else:
            encrypted += letter
    
    print("Encrypted:", encrypted)
    
    for letter in encrypted:
        if letter.isalpha():
            shift = ord('A') if letter.isupper() else ord('a')
            decrypted += chr((ord(letter) - shift - key) % 26 + shift)
        else:
            decrypted += letter
    
    print("Decrypted:", decrypted)


def position_based_caesar_cipher():
    print("Position based Caesar Cipher")
    name = input("Enter word: ")
    encrypted = ""
    decrypted = ""
    
    for letter in name:
        if letter.isalpha():
            shift = ord('a') if letter.islower() else ord('A')
            encrypted += str((ord(letter) - shift + 0) % 26) + " "
        else:
            encrypted += letter + " "
    
    print("Encrypted:", encrypted.strip())
    
    arr = encrypted.strip().split(" ")
    for num in arr:
        if num.isdigit():
            decrypted += chr(int(num) + ord('a'))
        else:
            decrypted += num
    
    print("Decrypted:", decrypted)


def custom_key_caesar_cipher():
    print("Custom key Caesar Cipher")
    name = input("Enter word: ")
    encrypted = ""
    decrypted = ""
    keys = []
    
    print("Enter keys for encryption (0-25):")
    for letter in name:
        key = int(input(f"Key for '{letter}': "))
        keys.append(key)
        if letter.isalpha():
            shift = ord('A') if letter.isupper() else ord('a')
            encrypted += chr((ord(letter) - shift + key) % 26 + shift)
        else:
            encrypted += letter
    print("Encrypted:", encrypted)
    
    for i, letter in enumerate(encrypted):
        key = keys[i]
        if letter.isalpha():
            shift = ord('A') if letter.isupper() else ord('a')
            decrypted += chr((ord(letter) - shift - key) % 26 + shift)
        else:
            decrypted += letter
    
    print("Decrypted:", decrypted)

simple_caesar_cipher()
position_based_caesar_cipher()
custom_key_caesar_cipher()
`,
        expName : 'Cipher Text Encryption and Decryption',
    },
    {
        code:`def monoAlphabetic():
    name = input("Enter name: ")
    chrArrLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    chrArrUpper = [c.upper() for c in chrArrLower]
    encrypted = ""
    decrypted = ""
    key = int(input("Enter key: "))

    for letter in name:
        if letter.islower():
            ascii_val = ord(letter)
            index = ((ascii_val - 97) + key) % 26
            encrypted += chrArrLower[index]
        elif letter.isupper():
            ascii_val = ord(letter)
            index = ((ascii_val - 65) + key) % 26
            encrypted += chrArrUpper[index]
        else:
            encrypted += letter
    print("Encrypted:", encrypted)

    for letter in encrypted:
        if letter.islower():
            ascii_val = ord(letter)
            index = ((ascii_val - 97) - key) % 26
            decrypted += chrArrLower[index]
        elif letter.isupper():
            ascii_val = ord(letter)
            index = ((ascii_val - 65) - key) % 26
            decrypted += chrArrUpper[index]
        else:
            decrypted += letter
    print("Decrypted:", decrypted)

monoAlphabetic()
`,
expName:'MonoAlphabetic Cipher',
    },
    {
        code : `name = input("Enter your name : ").lower()
key = input("Enter key : ").lower()
encrypted=""
decrypted=""
for i in range(len(name)):
    index_of_letter_in_name = ord(name[i])-ord('a')
    index_of_letter_in_key = ord(key[i])-ord('a')
    encrypted+=chr((index_of_letter_in_name+index_of_letter_in_key)%26+ord('a'))
print(encrypted)
for i in range(len(encrypted)):
    index_of_letter_in_encrypted = ord(encrypted[i])-ord('a')
    index_of_letter_in_key = ord(key[i])-ord('a')
    decrypted+=chr((index_of_letter_in_encrypted-index_of_letter_in_key+26)%26+ord('a'))
print(decrypted)`,
expName:'PolyAlphabetic Cipher',
    }
]

export default codesData;