# Code

```dart
class RepositoryManager {
  factory RepositoryManager() {
    _instance ??= RepositoryManager._();
    return _instance!;
  }

  RepositoryManager._();

  static RepositoryManager? _instance;

  _ExampleRepository? _ex1;
  _ExampleRepository? _ex2;

  _ExampleRepository get example1 => _ex1 ??= _ExampleRepository.ex1();

  _ExampleRepository get example2 => _ex2 ??= _ExampleRepository.ex2();
}
```
```dart
class _ExampleRepository {
  _ExampleRepository.ex1()
      : ref = DatabasePaths.instance.getNode1();
  _ExampleRepository.ex2()
      : ref = DatabasePaths.instance.getNode2();

  final DatabaseReference ref;

  Future<bool> hasData() async {
    final snapshot = await ref.get();
    return snapshot.exists;
  }
}
```
```dart
class DatabasePaths {
  static final DatabasePaths instance = DatabasePaths._();

  DatabasePaths._();

  DatabaseReference getNode1() {
    return dbRef.child("ex1").child(Auth.currentUser.uid);
  }

  DatabaseReference getNode2() {
    return dbRef.child("ex2").child(Auth.currentUser.uid);
  }
}
```