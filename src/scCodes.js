const codesData = [
    {
        expNo: 1,
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
        expName: 'Cipher Text Encryption and Decryption',
    },
    {
        expNo: '2a',
        code: `def monoAlphabetic():
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
        expName: 'MonoAlphabetic Cipher',
    },
    {
        expNo: '2b',
        code: `name = input("Enter your name : ").lower()
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
        expName: 'PolyAlphabetic Cipher',
    },
    {
        expNo: '3',
        code: `import binascii
def string_to_hex(s):
    return binascii.hexlify(s.encode()).decode()
def hex_to_bin(hex_str):
    return bin(int(hex_str, 16))[2:].zfill(64)
def bin_to_hex(bin_str):
    return hex(int(bin_str, 2))[2:].zfill(16)
def hex_to_string(hex_str):
    return binascii.unhexlify(hex_str).decode()

IP = [58, 50, 42, 34, 26, 18, 10, 2,
      60, 52, 44, 36, 28, 20, 12, 4,
      62, 54, 46, 38, 30, 22, 14, 6,
      64, 56, 48, 40, 32, 24, 16, 8,
      57, 49, 41, 33, 25, 17, 9, 1,
      59, 51, 43, 35, 27, 19, 11, 3,
      61, 53, 45, 37, 29, 21, 13, 5,
      63, 55, 47, 39, 31, 23, 15, 7]
FP = [40, 8, 48, 16, 56, 24, 64, 32,
      39, 7, 47, 15, 55, 23, 63, 31,
      38, 6, 46, 14, 54, 22, 62, 30,
      37, 5, 45, 13, 53, 21, 61, 29,
      36, 4, 44, 12, 52, 20, 60, 28,
      35, 3, 43, 11, 51, 19, 59, 27,
      34, 2, 42, 10, 50, 18, 58, 26,
      33, 1, 41, 9, 49, 17, 57, 25]
def key_generator(key):
    return key
def des_round(L, R, key, round_number):
    newR = L
    newL = R
    print(f"Round {round_number}:")
    print(f"  newL: {newL}")
    print(f"  newR: {newR}")
    return newL, newR
def des_encrypt(plaintext, key):
    hex_plaintext = string_to_hex(plaintext)
    binary_plaintext = hex_to_bin(hex_plaintext)
    permuted_input = ''.join([binary_plaintext[i-1] for i in IP])
    L = permuted_input[:32]
    R = permuted_input[32:]
    for i in range(1, 17):
        key = key_generator(key)
        L, R = des_round(L, R, key, i)
    
    swapped_output = R + L
    
    cipher_binary = ''.join([swapped_output[i-1] for i in FP])
    
    cipher_hex = bin_to_hex(cipher_binary)
    return cipher_hex

def des_decrypt(cipher_hex, key):
    binary_ciphertext = hex_to_bin(cipher_hex)
    
    permuted_input = ''.join([binary_ciphertext[i-1] for i in IP])
    
    L = permuted_input[:32]
    R = permuted_input[32:]
    
    for i in range(1, 17):
        key = key_generator(key)
        L, R = des_round(L, R, key, i)
    
    swapped_output = R + L
    
    plain_binary = ''.join([swapped_output[i-1] for i in FP])
    
    plain_hex = bin_to_hex(plain_binary)
    plaintext = hex_to_string(plain_hex)
    return plaintext

plaintext = input("Enter plain text : ")
key = input("Enter 64 bit key (Eg : 133457799BBCDFF1) : ")

cipher_hex = des_encrypt(plaintext, key)
print(f"Encrypted Text : {cipher_hex}")

decrypted_text = des_decrypt(cipher_hex, key)
print(f"Decrypted Text : {decrypted_text}")
`,
        expName: 'Data Encryption Standard',
    },
    {
        expNo: '4',
        expName: 'Advance Encryption Standard',
        code: `#pip install pycryptodome

from Crypto.Cipher import AES
from Crypto.Util.Padding import pad, unpad
from Crypto.Random import get_random_bytes

def encrypt_aes(key, plaintext):
    cipher = AES.new(key, AES.MODE_CBC)
    ciphertext = cipher.encrypt(pad(plaintext.encode(), AES.block_size))
    return cipher.iv, ciphertext

def decrypt_aes(key, iv, ciphertext):
    cipher = AES.new(key, AES.MODE_CBC, iv)
    plaintext = unpad(cipher.decrypt(ciphertext), AES.block_size)
    return plaintext.decode()

if __name__ == "__main__":
    key = get_random_bytes(16)  # AES key must be 16, 24, or 32 bytes long
    plaintext = input("Enter text : ")
    
    iv, ciphertext = encrypt_aes(key, plaintext)
    print(f"Ciphertext: {ciphertext}")

    decrypted_text = decrypt_aes(key, iv, ciphertext)
    print(f"Decrypted Text: {decrypted_text}")
`,
    },
    {
        expNo: 5,
        expName: "RSA Algorithm",
        code: `from Crypto.Util import number
from Crypto.Random import get_random_bytes

def generate_keys(bit_length=1024):
    p = number.getPrime(bit_length, get_random_bytes)
    q = number.getPrime(bit_length, get_random_bytes)
    n = p * q
    phi_n = (p - 1) * (q - 1)
    e = 65537
    d = pow(e, -1, phi_n)
    return (e, n), (d, n)

def encrypt(plaintext, public_key):
    e, n = public_key
    m = int.from_bytes(plaintext.encode('utf-8'), byteorder='big')
    c = pow(m, e, n)
    return c

def decrypt(ciphertext, private_key):
    d, n = private_key
    m = pow(ciphertext, d, n)
    plaintext = m.to_bytes((m.bit_length() + 7) // 8, byteorder='big').decode('utf-8')
    return plaintext

public_key, private_key = generate_keys()
print("Public Key:", public_key)
print("\\n")
print("Private Key:", private_key)
print("\\n")
plaintext = input("Enter text : ")
print("\\n")
print("Plaintext:", plaintext)
print("\\n")
ciphertext = encrypt(plaintext, public_key)
print("Ciphertext:", ciphertext)
print("\\n")
decrypted_message = decrypt(ciphertext, private_key)
print("Decrypted Message:", decrypted_message)
print("\\n")
`
    },
    {
        expNo:6,
        expName:"Diffie-Hellman Key exchange algorithm",
        code: `import random
import tkinter as tk
from tkinter import simpledialog, messagebox
def generate_prime():
    return 23
def calculate_shared_key(private_key, base, prime):
    return (base ** private_key) % prime
userA_color = simpledialog.askstring("Input", "User A, enter a color name:")
prime = generate_prime()
base = 5
private_key_A = random.randint(1, 10)
public_key_A = calculate_shared_key(private_key_A, base, prime)
private_key_B = random.randint(1, 10)
public_key_B = calculate_shared_key(private_key_B, base, prime)
shared_key_A = calculate_shared_key(private_key_B, public_key_A, prime)
shared_key_B = calculate_shared_key(private_key_A, public_key_B, prime)
if shared_key_A == shared_key_B:
    print("Key exchange successful!")
    print(f"User A: Private Key = {private_key_A}, Public Key = {public_key_A}, Shared Key = {shared_key_A}")
    print(f"User B: Private Key = {private_key_B}, Public Key = {public_key_B}, Shared Key = {shared_key_B}")
    root = tk.Tk()
    root.title("Color from User A")
    color_frame = tk.Frame(root, bg=userA_color, width=200, height=200)
    color_frame.pack_propagate(False)
    color_frame.pack()
    root.mainloop()
else:
    print("Key exchange failed.")
`
    }
]

export default codesData;