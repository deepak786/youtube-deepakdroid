# Root Cause

Eventually, I looked at how the database reference was created.

Instead of creating a new reference each time...

The application cached it inside a singleton repository.

That meant the UID became part of the cached path.

Everything worked...

Until the authenticated user changed.