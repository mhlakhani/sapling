# Copyright (c) Facebook, Inc. and its affiliates.
#
# This software may be used and distributed according to the terms of the
# GNU General Public License version 2.

# (generated with --quick)

import __future__

import __builtin__
import contextlib
from typing import (
    Any,
    Callable,
    Dict,
    Generator,
    Iterator,
    List,
    NoReturn,
    Optional,
    Set,
    Tuple,
    Type,
    TypeVar,
    Union,
)

import _weakref
import edenscm.mercurial.connectionpool
import edenscm.mercurial.context
import edenscm.mercurial.filelog
import edenscm.mercurial.lock
import edenscm.mercurial.namespaces
import edenscm.mercurial.pathutil
import edenscm.mercurial.peer
import edenscm.mercurial.phases
import edenscm.mercurial.repository
import edenscm.mercurial.scmutil
import edenscm.mercurial.store
import edenscm.mercurial.urllibcompat
import edenscm.mercurial.util
import edenscm.mercurial.vfs


_T = TypeVar("_T")
_T0 = TypeVar("_T0")
_T1 = TypeVar("_T1")
_Tlocalpeer = TypeVar("_Tlocalpeer", bound=localpeer)
_Tlocalrepository = TypeVar("_Tlocalrepository", bound=localrepository)


class _basefilecache(edenscm.mercurial.scmutil.filecache):
    __doc__: str

    def __delete__(self, repo) -> None:
        ...

    def __get__(self, repo, type=...) -> Any:
        ...

    def __set__(self, repo, value) -> None:
        ...


class filteredpropertycache(edenscm.mercurial.util.propertycache):
    __doc__: str


class locallegacypeer(edenscm.mercurial.repository.legacypeer, localpeer):
    __doc__: str
    _caps: Any
    _repo: Any
    _ui: Any

    def __init__(self, repo) -> None:
        ...

    def between(self, pairs) -> Any:
        ...

    def branches(self, nodes) -> Any:
        ...

    def changegroup(self, basenodes, source) -> Any:
        ...

    def changegroupsubset(self, bases, heads, source) -> Any:
        ...


class localpeer(edenscm.mercurial.repository.peer):
    __doc__: str
    _caps: Any
    _repo: Any
    _ui: Any
    ui: Any

    def __init__(self, repo, caps=...) -> None:
        ...

    def branchmap(self) -> Any:
        ...

    def canpush(self) -> bool:
        ...

    def capabilities(self) -> Set[str]:
        ...

    def close(self) -> None:
        ...

    def debugwireargs(self, one, two, three=..., four=..., five=...) -> str:
        ...

    def getbundle(self, source, heads=..., common=..., bundlecaps=..., **kwargs) -> Any:
        ...

    def heads(self, *args, **kwargs) -> list:
        ...

    def iterbatch(self) -> edenscm.mercurial.peer.localiterbatcher:
        ...

    def known(self, nodes) -> Any:
        ...

    def listkeys(self, namespace) -> Any:
        ...

    def local(self) -> Any:
        ...

    def lookup(self, key) -> Any:
        ...

    def peer(self: _Tlocalpeer) -> _Tlocalpeer:
        ...

    def pushkey(self, namespace, key, old, new) -> Any:
        ...

    def stream_out(self) -> NoReturn:
        ...

    def unbundle(self, cg, heads, url) -> Any:
        ...

    def url(self) -> Any:
        ...


class localrepository(object):
    __doc__: str
    _activebookmark: Any
    _basestoresupported: __builtin__.set[str]
    _basesupported: __builtin__.set[str]
    _bookmarks: Any
    _branchcaches: Dict[nothing, nothing]
    _datafilters: dict
    _decodefilterpats: Any
    _dirstatevalidatewarned: bool
    _eden_dirstate: Any
    _encodefilterpats: Any
    _eventreporting: bool
    _filecache: Dict[nothing, nothing]
    _lockfreeprefix: __builtin__.set[nothing]
    _lockref: Optional[_weakref.ReferenceType[nothing]]
    _mutationstore: Any
    _phasecache: edenscm.mercurial.phases.phasecache
    _phasedefaults: List[nothing]
    _postdsstatus: List[Tuple[Any, Any]]
    _transref: Optional[_weakref.ReferenceType[nothing]]
    _wlockfreeprefix: __builtin__.set[str]
    _wlockref: Optional[_weakref.ReferenceType[nothing]]
    auditor: edenscm.mercurial.pathutil.pathauditor
    baseui: edenscm.mercurial.ui.ui
    cachevfs: edenscm.mercurial.vfs.vfs
    changelog: edenscm.mercurial.changelog.changelog
    connectionpool: edenscm.mercurial.connectionpool.connectionpool
    dirstate: edenscm.mercurial.dirstate.dirstate
    disableeventreporting: Callable[..., contextlib._GeneratorContextManager]
    featuresetupfuncs: __builtin__.set[nothing]
    fileslog: Any
    filteredrevcache: Dict[nothing, nothing]
    filtername: None
    filterpats: Dict[Any, List[Tuple[Any, Any, Any]]]
    localvfs: edenscm.mercurial.vfs.vfs
    manifestlog: Any
    names: edenscm.mercurial.namespaces.namespaces
    nofsauditor: edenscm.mercurial.pathutil.pathauditor
    obsstore: Any
    openerreqs: __builtin__.set[str]
    origroot: str
    path: str
    prepushoutgoinghooks: Any
    requirements: Any
    root: str
    sharedfeatures: Set[str]
    sharedpath: str
    sharedroot: str
    sharedvfs: Optional[edenscm.mercurial.vfs.vfs]
    sjoin: Callable[[Any], Any]
    spath: str
    store: edenscm.mercurial.store.basicstore
    storefeaturesetupfuncs: Set[nothing]
    storerequirements: Set[str]
    storesupported: Set[str]
    supported: Set[str]
    supportedformats: Set[str]
    svfs: edenscm.mercurial.vfs.vfs
    ui: edenscm.mercurial.ui.ui
    vfs: edenscm.mercurial.vfs.vfs
    wvfs: edenscm.mercurial.vfs.vfs

    def __bool__(self) -> bool:
        ...

    def __contains__(self, changeid) -> bool:
        ...

    def __getitem__(self, changeid) -> Any:
        ...

    def __init__(self, baseui, path, create=...) -> None:
        ...

    def __iter__(self) -> Any:
        ...

    def __len__(self) -> int:
        ...

    def __nonzero__(self) -> bool:
        ...

    def _afterlock(self, callback) -> None:
        ...

    def _applyopenerreqs(self) -> None:
        ...

    def _buildcacheupdater(self, newtransaction) -> Callable[[Any], Any]:
        ...

    def _constructmanifest(self) -> Any:
        ...

    def _currentlock(self, lockref) -> Any:
        ...

    def _dirstatevalidate(self, node: bytes) -> bytes:
        ...

    def _featuresetup(
        self, setupfuncs, basesupported: _T1
    ) -> Union[__builtin__.set, _T1]:
        ...

    def _filecommit(self, fctx, manifest1, manifest2, linkrev, tr, changelist) -> Any:
        ...

    def _filter(self, filterpats, filename, data) -> Any:
        ...

    def _getsvfsward(self, origfunc) -> Callable:
        ...

    def _getvfsward(self, origfunc) -> Callable:
        ...

    def _journalfiles(
        self,
    ) -> Tuple[
        Tuple[Any, str],
        Tuple[edenscm.mercurial.vfs.vfs, str],
        Tuple[edenscm.mercurial.vfs.vfs, str],
        Tuple[edenscm.mercurial.vfs.vfs, str],
        Tuple[Any, str],
        Tuple[Any, str],
        Tuple[Any, str],
    ]:
        ...

    def _loadextensions(self) -> None:
        ...

    def _loadfilter(self, filter) -> List[Tuple[Any, Any, Any]]:
        ...

    def _lock(
        self,
        vfs,
        lockname,
        wait,
        releasefn,
        acquirefn,
        desc,
        inheritchecker=...,
        parentenvvar=...,
    ) -> edenscm.mercurial.lock.lock:
        ...

    def _narrowheadsmigration(self) -> None:
        ...

    def _refreshfilecachestats(repo: localrepository, *args, **kwargs) -> None:
        ...

    def _restrictcapabilities(self, caps: Set[str]) -> Set[str]:
        ...

    def _rollback(repo: localrepository, *args, **kwargs) -> int:
        ...

    def _syncrevlogtozstore(self) -> None:
        ...

    def _wlockchecktransaction(self) -> None:
        ...

    def _writejournal(repo: localrepository, *args, **kwargs) -> None:
        ...

    def _writerequirements(self) -> None:
        ...

    def _writestorerequirements(self) -> None:
        ...

    def _zstorecommitdatamigration(self) -> None:
        ...

    def adddatafilter(self, name, filter) -> None:
        ...

    def addpostdsstatus(self, ps, afterdirstatewrite=...) -> None:
        ...

    def anyrevs(self, specs, user=..., localalias=...) -> Any:
        ...

    def automigratefinish(self) -> None:
        ...

    def automigratestart(self) -> None:
        ...

    def between(self, pairs) -> List[List[nothing]]:
        ...

    def branches(self, nodes) -> List[Tuple[Any, Any, Any, Any]]:
        ...

    def branchheads(self, branch=..., start=..., closed=...) -> List[nothing]:
        ...

    def branchmap(self) -> Any:
        ...

    def branchtip(self, branch, ignoremissing=...) -> Any:
        ...

    def cancopy(self) -> bool:
        ...

    def changectx(
        self, changeid: Union[int, str, bytes, edenscm.mercurial.context.basectx]
    ) -> edenscm.mercurial.context.basectx:
        ...

    def checkcommitpatterns(self, wctx, match, status, fail) -> None:
        ...

    def checkpush(self, pushop) -> None:
        ...

    def clearpostdsstatus(self) -> None:
        ...

    def close(self) -> None:
        ...

    def commit(repo: localrepository, *args, **kwargs) -> Any:
        ...

    def commitctx(repo: localrepository, *args, **kwargs) -> Any:
        ...

    def commitpending(repo: localrepository, *args, **kwargs) -> None:
        ...

    def currenttransaction(self) -> Any:
        ...

    def currentwlock(self) -> Any:
        ...

    def debugwireargs(self, one, two, three=..., four=..., five=...) -> str:
        ...

    def destroyed(self) -> None:
        ...

    def destroying(self) -> None:
        ...

    def file(self, f) -> edenscm.mercurial.filelog.filelog:
        ...

    def filectx(
        self, path, changeid=..., fileid=...
    ) -> edenscm.mercurial.context.filectx:
        ...

    def filtered(self, name) -> self:
        ...

    def getcwd(self) -> str:
        ...

    def headrevs(
        self, start=..., includepublic=..., includedraft=..., reverse=...
    ) -> List[int]:
        ...

    def heads(self, start=..., includepublic=..., includedraft=...) -> List[bytes]:
        ...

    def hook(self, name: str, throw: bool = ..., **args) -> Any:
        ...

    def invalidate(self, clearfilecache=...) -> None:
        ...

    def invalidateall(self) -> None:
        ...

    def invalidatecaches(self) -> None:
        ...

    def invalidatedirstate(self) -> None:
        ...

    def invalidatevolatilesets(self) -> None:
        ...

    def known(self, nodes) -> List[bool]:
        ...

    def listkeys(self, namespace: str) -> Any:
        ...

    def local(self) -> self:
        ...

    def lock(self, wait: bool = ...) -> Any:
        ...

    def lookup(self, key) -> Any:
        ...

    def lookupbranch(self, key, remote=...) -> Any:
        ...

    def nodebookmarks(self, node) -> list:
        ...

    def nodes(self, expr, *args) -> Generator[Any, Any, None]:
        ...

    def pathto(self, f, cwd=...) -> Any:
        ...

    def peer(self) -> localpeer:
        ...

    def postdsstatus(self, afterdirstatewrite=...) -> list:
        ...

    def publishing(self) -> Any:
        ...

    def pushkey(self, namespace, key, old, new) -> Any:
        ...

    def recover(self) -> bool:
        ...

    def revs(self, expr, *args) -> Any:
        ...

    def rollback(self, dryrun=..., force=...) -> Any:
        ...

    def savecommitmessage(self, text) -> Any:
        ...

    def set(self, expr, *args) -> Generator[Any, Any, None]:
        ...

    def setparents(self, p1, p2=...) -> None:
        ...

    def shared(self) -> Optional[str]:
        ...

    def status(
        self, node1=..., node2=..., match=..., ignored=..., clean=..., unknown=...
    ) -> Any:
        ...

    def transaction(self, desc, report=...) -> Any:
        ...

    def undofiles(self) -> List[Tuple[Any, Any]]:
        ...

    def unfiltered(self) -> self:
        ...

    def updatecaches(repo: localrepository, *args, **kwargs) -> None:
        ...

    def url(self) -> str:
        ...

    def walk(self, match, node=...) -> Any:
        ...

    def wjoin(self, f, *insidef) -> str:
        ...

    def wlock(self, wait=...) -> Any:
        ...

    def wread(self, filename) -> bytes:
        ...

    def wwrite(self, filename, data, flags, backgroundclose=...) -> int:
        ...

    def wwritedata(self, filename, data) -> Any:
        ...


class repofilecache(_basefilecache):
    __doc__: str

    def __init__(self, localpaths=..., sharedpaths=...) -> None:
        ...

    def localjoin(self, obj, fname) -> Any:
        ...

    def sharedjoin(self, obj, fname) -> Any:
        ...


class storecache(_basefilecache):
    __doc__: str

    def join(self, obj, fname) -> Any:
        ...


class unfilteredpropertycache(edenscm.mercurial.util.propertycache):
    __doc__: str

    def __get__(self, repo, type=...) -> Any:
        ...


def aftertrans(files) -> Callable[[], Any]:
    ...


def hasunfilteredcache(repo, name) -> bool:
    ...


def instance(ui, path, create) -> localrepository:
    ...


def isfilecached(repo, name) -> Tuple[Any, bool]:
    ...


def islocal(path) -> bool:
    ...


def newreporequirements(repo: localrepository) -> Set[str]:
    ...


def newrepostorerequirements(repo: localrepository) -> Set[str]:
    ...


def release(*locks) -> None:
    ...


def undoname(fn) -> Any:
    ...


def unfilteredmethod(orig) -> Callable:
    ...
