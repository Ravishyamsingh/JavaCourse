import { LessonContent } from '../../types/LessonTypes';

export const lesson_7_5: LessonContent = {
  title: 'Object Serialization',
  type: 'coding',
  duration: '35 min',
  module: 'File I/O and Serialization',
  content: {
    overview: 'Learn how to serialize and deserialize Java objects. This lesson covers the Serializable interface, custom serialization, handling transient fields, and best practices for object persistence.',
    objectives: [
      'Understand object serialization in Java',
      'Implement the Serializable interface correctly',
      'Customize serialization with writeObject/readObject methods',
      'Handle transient fields and versioning',
      'Practice serialization best practices',
      'Work with serialization security considerations'
    ],
    theory: `
      <div class="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg mb-8 shadow-2xl">
        <h1 class="text-3xl font-bold m-0 flex items-center">
          <span class="w-3 h-10 bg-white rounded mr-4"></span>
          Object Serialization
        </h1>
        <p class="mt-3 text-indigo-100 text-lg">Persisting Java objects to binary format</p>
      </div>

      <div class="space-y-8">
        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">1</span>
            Introduction to Object Serialization
          </h2>
          <p class="text-gray-700 mb-4 leading-relaxed text-lg">
            Object serialization is the process of converting an object's state to a byte stream, which can then be 
            stored to a file, sent over a network, or kept in memory for later use. Deserialization is the reverse 
            process of reconstructing the object from the byte stream.
          </p>
          <div class="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400 mb-4">
            <h4 class="font-bold text-indigo-800 mb-2">💡 Key Concept</h4>
            <p class="text-indigo-700">Serialization allows Java objects to be persisted beyond the lifetime of the JVM, enabling features like caching, remote method invocation, and object storage.</p>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">2</span>
            The Serializable Interface
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">The Serializable interface is a marker interface that enables serialization:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold text-blue-800 mb-2">Basic Serialization</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Implement Serializable interface</li>
                  <li>• Define serialVersionUID for version control</li>
                  <li>• Use ObjectOutputStream/ObjectInputStream</li>
                  <li>• Handle NotSerializableException</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  public class Person implements Serializable {<br/>
                  &nbsp;&nbsp;private static final long serialVersionUID = 1L;<br/>
                  &nbsp;&nbsp;private String name;<br/>
                  &nbsp;&nbsp;private int age;<br/>
                  }
                </div>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold text-green-800 mb-2">Serialization Process</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• ObjectOutputStream.writeObject()</li>
                  <li>• ObjectInputStream.readObject()</li>
                  <li>• Automatic field serialization</li>
                  <li>• Recursive serialization of object graphs</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  ObjectOutputStream oos = new ObjectOutputStream(<br/>
                  &nbsp;&nbsp;new FileOutputStream("person.ser"));<br/>
                  oos.writeObject(person);
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">3</span>
            Custom Serialization Methods
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Customize serialization behavior with special methods:</p>
            
            <div class="bg-gray-900 text-green-400 p-4 rounded font-mono text-sm">
              public class CustomSerializableClass implements Serializable {<br/>
              &nbsp;&nbsp;private static final long serialVersionUID = 1L;<br/>
              &nbsp;&nbsp;private String data;<br/>
              &nbsp;&nbsp;private transient String sensitiveData;<br/>
              &nbsp;&nbsp;<br/>
              &nbsp;&nbsp;// Custom serialization<br/>
              &nbsp;&nbsp;private void writeObject(ObjectOutputStream oos) <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throws IOException {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;oos.defaultWriteObject(); // Serialize default fields<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;oos.writeObject(encrypt(sensitiveData)); // Custom handling<br/>
              &nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;<br/>
              &nbsp;&nbsp;// Custom deserialization<br/>
              &nbsp;&nbsp;private void readObject(ObjectInputStream ois) <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;throws IOException, ClassNotFoundException {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;ois.defaultReadObject(); // Deserialize default fields<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;sensitiveData = decrypt((String) ois.readObject());<br/>
              &nbsp;&nbsp;}<br/>
              }
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-purple-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Method</th>
                    <th class="text-left p-3 font-bold border-b">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-mono">writeObject()</td>
                    <td class="p-3">Custom serialization logic</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">readObject()</td>
                    <td class="p-3">Custom deserialization logic</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-mono">writeReplace()</td>
                    <td class="p-3">Replace object during serialization</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-mono">readResolve()</td>
                    <td class="p-3">Replace object during deserialization</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-orange-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">4</span>
            Transient Fields and Versioning
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Controlling serialization with transient fields and versioning:</p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold text-orange-800 mb-2">Transient Fields</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• Mark fields as transient to exclude from serialization</li>
                  <li>• Transient fields are set to default values after deserialization</li>
                  <li>• Useful for sensitive data or non-serializable objects</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  public class User implements Serializable {<br/>
                  &nbsp;&nbsp;private String username;<br/>
                  &nbsp;&nbsp;private transient String password;<br/>
                  &nbsp;&nbsp;private transient Thread workerThread;<br/>
                  }
                </div>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold text-red-800 mb-2">Versioning</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• serialVersionUID controls compatibility</li>
                  <li>• Changing it breaks deserialization of old objects</li>
                  <li>• Use default value for automatic generation</li>
                  <li>• Handle InvalidClassException appropriately</li>
                </ul>
                <div class="bg-gray-900 text-green-400 p-2 rounded font-mono text-sm mt-2">
                  // Compatible change - same serialVersionUID<br/>
                  private static final long serialVersionUID = 1L;<br/>
                  <br/>
                  // Incompatible change - new serialVersionUID<br/>
                  private static final long serialVersionUID = 2L;
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-cyan-500">
          <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span class="bg-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm font-bold">5</span>
            Serialization Best Practices
          </h2>
          <div class="space-y-4">
            <p class="text-gray-700">Following best practices for robust serialization:</p>
            
            <div class="overflow-x-auto">
              <table class="w-full text-sm border border-gray-200">
                <thead class="bg-cyan-50">
                  <tr>
                    <th class="text-left p-3 font-bold border-b">Practice</th>
                    <th class="text-left p-3 font-bold border-b">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Explicit serialVersionUID</td>
                    <td class="p-3">Always define serialVersionUID explicitly</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Minimize serialized data</td>
                    <td class="p-3">Use transient for unnecessary fields</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Handle security</td>
                    <td class="p-3">Validate and sanitize during deserialization</td>
                  </tr>
                  <tr class="border-b bg-gray-50">
                    <td class="p-3 font-medium">Test compatibility</td>
                    <td class="p-3">Test serialization across different versions</td>
                  </tr>
                  <tr class="border-b">
                    <td class="p-3 font-medium">Document format</td>
                    <td class="p-3">Document serialization format for maintenance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section class="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">🎯 Best Practices for Object Serialization</h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">✅ Do's</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Always declare serialVersionUID explicitly</li>
                <li>• Use transient for sensitive or unnecessary fields</li>
                <li>• Implement custom serialization for complex objects</li>
                <li>• Handle serialization security concerns</li>
                <li>• Test serialization compatibility across versions</li>
              </ul>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h4 class="font-bold text-gray-800 mb-3">🚫 Don'ts</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Don't serialize sensitive data without encryption</li>
                <li>• Don't change serialVersionUID without consideration</li>
                <li>• Don't serialize classes you don't control</li>
                <li>• Don't ignore serialization exceptions</li>
                <li>• Don't assume default serialization is always appropriate</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    `,
    codeExample: `/**
 * ObjectSerializationDemo.java
 * 
 * This comprehensive example demonstrates object serialization in Java:
 * - Basic serialization with Serializable interface
 * - Custom serialization with writeObject/readObject
 * - Handling transient fields
 * - Versioning and compatibility
 * - Serialization best practices
 * 
 * Run this program to see object serialization in practice.
 */

import java.io.*;
import java.util.*;

// Simple serializable class
class Person implements Serializable {
    private static final long serialVersionUID = 1L;
    private String name;
    private int age;
    private String email;
    
    public Person(String name, int age, String email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    
    @Override
    public String toString() {
        return "Person{name='" + name + "', age=" + age + ", email='" + email + "'}";
    }
    
    // Getters
    public String getName() { return name; }
    public int getAge() { return age; }
    public String getEmail() { return email; }
}

// Class with transient fields
class UserAccount implements Serializable {
    private static final long serialVersionUID = 1L;
    private String username;
    private transient String password; // Sensitive data, don't serialize
    private Date lastLogin;
    private int loginCount;
    
    public UserAccount(String username, String password) {
        this.username = username;
        this.password = password;
        this.lastLogin = new Date();
        this.loginCount = 0;
    }
    
    // Simulate login
    public void login() {
        this.lastLogin = new Date();
        this.loginCount++;
        System.out.println("User " + username + " logged in");
    }
    
    @Override
    public String toString() {
        return "UserAccount{username='" + username + "', password='" + 
               (password != null ? "****" : "null") + "', lastLogin=" + 
               lastLogin + ", loginCount=" + loginCount + "}";
    }
    
    // Getters
    public String getUsername() { return username; }
    public String getPassword() { return password; }
    public Date getLastLogin() { return lastLogin; }
    public int getLoginCount() { return loginCount; }
}

// Class with custom serialization
class BankAccount implements Serializable {
    private static final long serialVersionUID = 1L;
    private String accountNumber;
    private double balance;
    private transient String pin; // Sensitive data
    private List<String> transactionHistory;
    
    public BankAccount(String accountNumber, String pin, double initialBalance) {
        this.accountNumber = accountNumber;
        this.pin = pin;
        this.balance = initialBalance;
        this.transactionHistory = new ArrayList<>();
        this.transactionHistory.add("Account opened with balance: " + initialBalance);
    }
    
    // Custom serialization method
    private void writeObject(ObjectOutputStream oos) throws IOException {
        // Serialize default fields
        oos.defaultWriteObject();
        
        // Encrypt and serialize sensitive data
        oos.writeObject(encrypt(pin));
        
        // Serialize transaction history size and items
        oos.writeInt(transactionHistory.size());
        for (String transaction : transactionHistory) {
            oos.writeObject(transaction);
        }
    }
    
    // Custom deserialization method
    private void readObject(ObjectInputStream ois) 
            throws IOException, ClassNotFoundException {
        // Deserialize default fields
        ois.defaultReadObject();
        
        // Decrypt sensitive data
        pin = decrypt((String) ois.readObject());
        
        // Deserialize transaction history
        int historySize = ois.readInt();
        transactionHistory = new ArrayList<>(historySize);
        for (int i = 0; i < historySize; i++) {
            transactionHistory.add((String) ois.readObject());
        }
    }
    
    // Simple encryption/decryption (NOT for production use)
    private String encrypt(String data) {
        if (data == null) return null;
        StringBuilder encrypted = new StringBuilder();
        for (char c : data.toCharArray()) {
            encrypted.append((char)(c + 1));
        }
        return encrypted.toString();
    }
    
    private String decrypt(String data) {
        if (data == null) return null;
        StringBuilder decrypted = new StringBuilder();
        for (char c : data.toCharArray()) {
            decrypted.append((char)(c - 1));
        }
        return decrypted.toString();
    }
    
    // Add transaction
    public void addTransaction(String transaction) {
        transactionHistory.add(transaction);
    }
    
    @Override
    public String toString() {
        return "BankAccount{accountNumber='" + accountNumber + 
               "', balance=" + balance + 
               ", pin='" + (pin != null ? "****" : "null") + 
               "', transactions=" + transactionHistory.size() + "}";
    }
    
    // Getters
    public String getAccountNumber() { return accountNumber; }
    public double getBalance() { return balance; }
    public String getPin() { return pin; }
    public List<String> getTransactionHistory() { return transactionHistory; }
}

// Version 2 of Person class to demonstrate versioning
class PersonV2 implements Serializable {
    private static final long serialVersionUID = 2L; // Changed version
    private String name;
    private int age;
    private String email;
    private String phoneNumber; // New field in version 2
    
    public PersonV2(String name, int age, String email, String phoneNumber) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    
    @Override
    public String toString() {
        return "PersonV2{name='" + name + "', age=" + age + 
               ", email='" + email + "', phone='" + phoneNumber + "'}";
    }
}

public class ObjectSerializationDemo {
    
    public static void main(String[] args) {
        printHeader();
        
        // Demonstrate basic serialization
        demonstrateBasicSerialization();
        
        // Demonstrate transient fields
        demonstrateTransientFields();
        
        // Demonstrate custom serialization
        demonstrateCustomSerialization();
        
        // Demonstrate versioning
        demonstrateVersioning();
        
        printFooter();
    }
    
    private static void printHeader() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║         OBJECT SERIALIZATION DEMO                            ║");
        System.out.println("║         Serializing Java Objects to Binary Format            ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
        System.out.println();
    }
    
    private static void demonstrateBasicSerialization() {
        System.out.println("🔸 BASIC SERIALIZATION DEMONSTRATION");
        System.out.println("   ──────────────────────────────────");
        
        String filename = "person.ser";
        
        try {
            // Create a Person object
            Person originalPerson = new Person("Alice Johnson", 30, "alice@example.com");
            System.out.println("   Original Person: " + originalPerson);
            
            // Serialize the Person object
            System.out.println("   Serializing Person object...");
            try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(filename))) {
                oos.writeObject(originalPerson);
            }
            System.out.println("   Person object serialized to " + filename);
            
            // Deserialize the Person object
            System.out.println("   Deserializing Person object...");
            Person deserializedPerson;
            try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(filename))) {
                deserializedPerson = (Person) ois.readObject();
            }
            System.out.println("   Deserialized Person: " + deserializedPerson);
            
            // Verify they are equal (different objects but same data)
            System.out.println("   Objects are equal: " + 
                             (originalPerson.getName().equals(deserializedPerson.getName()) &&
                              originalPerson.getAge() == deserializedPerson.getAge() &&
                              originalPerson.getEmail().equals(deserializedPerson.getEmail())));
            
            // Clean up
            new File(filename).delete();
            System.out.println("   Cleaned up temporary file");
            
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("   Exception occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateTransientFields() {
        System.out.println("🔸 TRANSIENT FIELDS DEMONSTRATION");
        System.out.println("   ───────────────────────────────");
        
        String filename = "user_account.ser";
        
        try {
            // Create a UserAccount object
            UserAccount originalAccount = new UserAccount("alice", "secret123");
            originalAccount.login(); // Update login info
            originalAccount.login(); // Login again
            System.out.println("   Original Account: " + originalAccount);
            
            // Serialize the UserAccount object
            System.out.println("   Serializing UserAccount object...");
            try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(filename))) {
                oos.writeObject(originalAccount);
            }
            System.out.println("   UserAccount object serialized to " + filename);
            
            // Deserialize the UserAccount object
            System.out.println("   Deserializing UserAccount object...");
            UserAccount deserializedAccount;
            try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(filename))) {
                deserializedAccount = (UserAccount) ois.readObject();
            }
            System.out.println("   Deserialized Account: " + deserializedAccount);
            
            // Note that transient fields are reset to default values
            System.out.println("   Password after deserialization: " + deserializedAccount.getPassword());
            System.out.println("   Login count after deserialization: " + deserializedAccount.getLoginCount());
            System.out.println("   Last login after deserialization: " + deserializedAccount.getLastLogin());
            
            // Clean up
            new File(filename).delete();
            System.out.println("   Cleaned up temporary file");
            
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("   Exception occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateCustomSerialization() {
        System.out.println("🔸 CUSTOM SERIALIZATION DEMONSTRATION");
        System.out.println("   ───────────────────────────────────");
        
        String filename = "bank_account.ser";
        
        try {
            // Create a BankAccount object
            BankAccount originalAccount = new BankAccount("ACC123456", "1234", 1000.0);
            originalAccount.addTransaction("Deposit: $500");
            originalAccount.addTransaction("Withdrawal: $200");
            System.out.println("   Original Account: " + originalAccount);
            
            // Serialize the BankAccount object
            System.out.println("   Serializing BankAccount object...");
            try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(filename))) {
                oos.writeObject(originalAccount);
            }
            System.out.println("   BankAccount object serialized to " + filename);
            
            // Deserialize the BankAccount object
            System.out.println("   Deserializing BankAccount object...");
            BankAccount deserializedAccount;
            try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(filename))) {
                deserializedAccount = (BankAccount) ois.readObject();
            }
            System.out.println("   Deserialized Account: " + deserializedAccount);
            
            // Verify sensitive data was properly handled
            System.out.println("   PIN preserved: " + 
                             (originalAccount.getPin().equals(deserializedAccount.getPin())));
            System.out.println("   Transaction history preserved: " + 
                             (originalAccount.getTransactionHistory().equals(
                                 deserializedAccount.getTransactionHistory())));
            
            // Clean up
            new File(filename).delete();
            System.out.println("   Cleaned up temporary file");
            
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("   Exception occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void demonstrateVersioning() {
        System.out.println("🔸 SERIALIZATION VERSIONING DEMONSTRATION");
        System.out.println("   ───────────────────────────────────────");
        
        String filename = "person_v1.ser";
        
        try {
            // First, serialize a Person (version 1) object
            Person originalPerson = new Person("Bob Smith", 25, "bob@example.com");
            System.out.println("   Original Person (v1): " + originalPerson);
            
            // Serialize the Person object
            System.out.println("   Serializing Person v1 object...");
            try (ObjectOutputStream oos = new ObjectOutputStream(new FileOutputStream(filename))) {
                oos.writeObject(originalPerson);
            }
            System.out.println("   Person v1 object serialized to " + filename);
            
            // Now try to deserialize it as PersonV2 (version 2)
            System.out.println("   Deserializing as PersonV2 (v2)...");
            try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(filename))) {
                PersonV2 deserializedPersonV2 = (PersonV2) ois.readObject();
                System.out.println("   Deserialized as PersonV2: " + deserializedPersonV2);
                // Note: phoneNumber will have default value (null)
            } catch (InvalidClassException e) {
                System.out.println("   Version mismatch detected: " + e.getMessage());
                System.out.println("   This is expected when serialVersionUID changes");
            }
            
            // Now demonstrate compatible serialization with same serialVersionUID
            System.out.println("   Demonstrating compatible serialization:");
            
            // Create a class that's compatible with Person
            class CompatiblePerson implements Serializable {
                private static final long serialVersionUID = 1L; // Same as Person
                private String name;
                private int age;
                private String email;
                private String additionalField; // New field, but compatible
                
                @Override
                public String toString() {
                    return "CompatiblePerson{name='" + name + "', age=" + age + 
                           ", email='" + email + "', additional='" + additionalField + "'}";
                }
            }
            
            // Deserialize Person as CompatiblePerson
            try (ObjectInputStream ois = new ObjectInputStream(new FileInputStream(filename))) {
                CompatiblePerson compatPerson = (CompatiblePerson) ois.readObject();
                System.out.println("   Deserialized as CompatiblePerson: " + compatPerson);
            }
            
            // Clean up
            new File(filename).delete();
            System.out.println("   Cleaned up temporary file");
            
        } catch (IOException | ClassNotFoundException e) {
            System.out.println("   Exception occurred: " + e.getMessage());
        }
        
        System.out.println();
    }
    
    private static void printFooter() {
        System.out.println("╔══════════════════════════════════════════════════════════════╗");
        System.out.println("║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║");
        System.out.println("║                                                              ║");
        System.out.println("║  You've learned about:                                       ║");
        System.out.println("║  • Basic object serialization with Serializable              ║");
        System.out.println("║  • Handling transient fields                                 ║");
        System.out.println("║  • Custom serialization with writeObject/readObject          ║");
        System.out.println("║  • Versioning and compatibility issues                       ║");
        System.out.println("║  • Best practices for object serialization                   ║");
        System.out.println("║                                                              ║");
        System.out.println("║  Remember to:                                                ║");
        System.out.println("║  • Always declare serialVersionUID explicitly                 ║");
        System.out.println("║  • Use transient for sensitive or unnecessary fields         ║");
        System.out.println("║  • Implement custom serialization for complex objects        ║");
        System.out.println("║  • Handle serialization security concerns                    ║");
        System.out.println("╚══════════════════════════════════════════════════════════════╝");
    }
}

/*
 * SAMPLE OUTPUT:
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║         OBJECT SERIALIZATION DEMO                            ║
 * ║         Serializing Java Objects to Binary Format            ║
 * ╚══════════════════════════════════════════════════════════════╝
 * 
 * 🔸 BASIC SERIALIZATION DEMONSTRATION
 *    ──────────────────────────────────
 *    Original Person: Person{name='Alice Johnson', age=30, email='alice@example.com'}
 *    Serializing Person object...
 *    Person object serialized to person.ser
 *    Deserializing Person object...
 *    Deserialized Person: Person{name='Alice Johnson', age=30, email='alice@example.com'}
 *    Objects are equal: true
 *    Cleaned up temporary file
 * 
 * 🔸 TRANSIENT FIELDS DEMONSTRATION
 *    ───────────────────────────────
 *    Original Account: UserAccount{username='alice', password='****', lastLogin=Fri Jan 01 12:00:00 GMT 2021, loginCount=2}
 *    User logged in
 *    User logged in
 *    Serializing UserAccount object...
 *    UserAccount object serialized to user_account.ser
 *    Deserializing UserAccount object...
 *    Deserialized Account: UserAccount{username='alice', password='null', lastLogin=Fri Jan 01 12:00:00 GMT 1970, loginCount=0}
 *    Password after deserialization: null
 *    Login count after deserialization: 0
 *    Last login after deserialization: Fri Jan 01 12:00:00 GMT 1970
 *    Cleaned up temporary file
 * 
 * 🔸 CUSTOM SERIALIZATION DEMONSTRATION
 *    ───────────────────────────────────
 *    Original Account: BankAccount{accountNumber='ACC123456', balance=1000.0, pin='****', transactions=3}
 *    Serializing BankAccount object...
 *    BankAccount object serialized to bank_account.ser
 *    Deserializing BankAccount object...
 *    Deserialized Account: BankAccount{accountNumber='ACC123456', balance=1000.0, pin='****', transactions=3}
 *    PIN preserved: true
 *    Transaction history preserved: true
 *    Cleaned up temporary file
 * 
 * 🔸 SERIALIZATION VERSIONING DEMONSTRATION
 *    ───────────────────────────────────────
 *    Original Person (v1): Person{name='Bob Smith', age=25, email='bob@example.com'}
 *    Serializing Person v1 object...
 *    Person v1 object serialized to person_v1.ser
 *    Deserializing as PersonV2 (v2)...
 *    Version mismatch detected: serialVersionUID mismatch
 *    This is expected when serialVersionUID changes
 *    Demonstrating compatible serialization:
 *    Deserialized as CompatiblePerson: CompatiblePerson{name='Bob Smith', age=25, email='bob@example.com', additional='null'}
 *    Cleaned up temporary file
 * 
 * ╔══════════════════════════════════════════════════════════════╗
 * ║                    🎉 DEMONSTRATION COMPLETE! 🎉           ║
 * ╚══════════════════════════════════════════════════════════════╝
 */`,
    exercise: `
      **🎯 Object Serialization Practice Exercise**

      Create comprehensive programs to practice object serialization in Java.

      **Part 1: Game State Serializer**
      
      Create a program called \`GameStateSerializer.java\` that serializes and deserializes game states:
      
      Requirements:
      - Serialize complex game state objects
      - Handle different game object types
      - Implement save/load functionality
      - Manage serialization versioning
      
      Features to implement:
      - Custom serialization for game objects
      - Transient fields for runtime-only data
      - Error handling for corrupted save files
      - Backward compatibility for older saves

      **Part 2: Configuration Manager**
      
      Create a program called \`ConfigurationManager.java\` that manages application configurations:
      
      Requirements:
      - Serialize application settings to files
      - Handle user preferences and profiles
      - Implement secure storage for sensitive settings
      - Support configuration versioning
      
      Advanced Features:
      - Encryption for sensitive configuration data
      - Configuration templates and defaults
      - Import/export functionality
      - Validation of configuration data

      **Part 3: Data Cache System**
      
      Create a program called \`DataCacheSystem.java\` that implements an object caching mechanism:
      
      Requirements:
      - Serialize cached objects to disk
      - Implement cache expiration and cleanup
      - Handle cache persistence across sessions
      - Manage memory usage efficiently
      
      Features to implement:
      - LRU (Least Recently Used) cache algorithm
      - Serialization for cache persistence
      - Performance monitoring and statistics
      - Thread-safe cache operations

      **Part 4: Network Message Serializer**
      
      Create a program called \`NetworkMessageSerializer.java\` that serializes network messages:
      
      Requirements:
      - Serialize different types of network messages
      - Handle message headers and metadata
      - Implement message compression
      - Ensure message integrity
      
      Advanced Features:
      - Support for multiple message protocols
      - Message queuing and buffering
      - Error recovery for failed transmissions
      - Performance optimization for high-volume messaging

      **Part 5: Document Storage System**
      
      Create a program called \`DocumentStorageSystem.java\` that manages document serialization:
      
      Requirements:
      - Serialize document objects with metadata
      - Handle document versioning and history
      - Implement document search and indexing
      - Manage document access permissions
      
      Features to implement:
      - Custom serialization for document content
      - Metadata extraction and storage
      - Document format conversion
      - Security and access control

      **Deliverables:**
      Submit the following files:
      1. \`GameStateSerializer.java\` - Game state serialization system
      2. \`ConfigurationManager.java\` - Application configuration manager
      3. \`DataCacheSystem.java\` - Object caching system
      4. \`NetworkMessageSerializer.java\` - Network message serializer
      5. \`DocumentStorageSystem.java\` - Document storage system
      6. \`README.md\` - Documentation explaining each program
      7. Screenshots of all programs running successfully

      **🎯 Success Criteria:**
      
      Your programs should demonstrate:
      - ✅ Correct implementation of object serialization
      - ✅ Understanding of the Serializable interface
      - ✅ Proper use of transient fields
      - ✅ Custom serialization with writeObject/readObject
      - ✅ Clean, readable code with appropriate comments
      - ✅ Comprehensive serialization capabilities
      - ✅ Application of best practices for serialization

      **💡 Bonus Challenges:**
      
      1. Advanced Serialization: Implement sophisticated serialization frameworks
      2. Performance Optimization: Add performance tracking to serialization operations
      3. Security Features: Add encryption and validation to serialization
      4. Cross-Platform Compatibility: Design serialization for multiple platforms
      5. Extensibility: Create frameworks for reusable serialization components
    `
  }
};