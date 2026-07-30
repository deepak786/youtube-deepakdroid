# Fix

```diff
 class _ExampleRepository {
   _ExampleRepository.ex1()
-      : ref = DatabasePaths.instance.getNode1();
+      : _ref = DatabasePaths.instance.getNode1;
-
   _ExampleRepository.ex2()
-      : ref = DatabasePaths.instance.getNode2();
+      : _ref = DatabasePaths.instance.getNode2;

-  final DatabaseReference ref;
+  final DatabaseReference Function() _ref;
+
+  DatabaseReference get ref => _ref();

   Future<bool> hasData() async {
     final snapshot = await ref.get();
     return snapshot.exists;
   }
 }
```
