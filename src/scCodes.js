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
            encrypted += str((ord(letter) - shift + 0) % 26) + " "  # No shift for simplicity
        else:
            encrypted += letter + " "
    
    print("Encrypted:", encrypted.strip())
    
    arr = encrypted.strip().split(" ")
    for num in arr:
        if num.isdigit():
            decrypted += chr(int(num) + ord('a'))  # Assuming input was all lowercase for simplicity
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
    }
]

export default codesData;