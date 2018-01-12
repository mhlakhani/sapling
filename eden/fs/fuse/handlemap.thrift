namespace cpp2 facebook.eden

struct FileHandleMapEntry {
  1: i64 inodeNumber
  2: i64 handleId // really u64
  3: bool isDir
}

struct SerializedFileHandleMap {
  1: list<FileHandleMapEntry> entries
}

struct SerializedInodeMapEntry {
  1: i64 inodeNumber,
  2: i64 parentInode,
  3: string name,
  4: bool isUnlinked,
  5: i64 numFuseReferences,
  6: string hash,
  7: i32 mode,
}

struct SerializedInodeMap {
  1: i64 nextInodeNumber
  2: list<SerializedInodeMapEntry> unloadedInodes,
}
