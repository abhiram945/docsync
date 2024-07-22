const codesData = [
    {
        code: `name = input("Enter word: ")
encrypted = ""
decrypted = ""
key = int(input("Enter key (0-9): "))
for letter in name:
    encrypted += chr(ord(letter) + key)
print("Encrypted:", encrypted)
for letter in encrypted:
    decrypted += chr(ord(letter) - key)
print("Decrypted:", decrypted)


name = input("Enter word: ")
encrypted = ""
decrypted = ""
for letter in name:
    encrypted += str(ord(letter) - ord('a')) + " "
print("Encrypted:", encrypted.strip())
arr = encrypted.strip().split(" ")
for num in arr:
    decrypted += chr(int(num) + ord('a'))
print("Decrypted:", decrypted)


name = input("Enter word: ")
encrypted = ""
decrypted = ""
print("Enter keys for encryption (0-9):")
for letter in name:
    key = int(input(f"Key for '{letter}': "))
    encrypted += chr(ord(letter) + key)
print("Encrypted:", encrypted)
print("Enter keys for decryption (must match the encryption keys):")
for letter in encrypted:
    key = int(input(f"Key for '{letter}': "))
    decrypted += chr(ord(letter) - key)
print("Decrypted:", decrypted)
`,
        expName : 'Cipher Text Encryption and Decryption',
    }
]

export default codesData;