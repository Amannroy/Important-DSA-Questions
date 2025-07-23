let getIntersectionNode = function (headA, headB) {
    let m = findLength(headA);
    let n = findLength(headB);

    let fp = headA;
    let sp = headB;

    if (m <= n) {
        for (let i = 0; i < n - m; i++) {
            sp = sp.next;
        }
    } else {
        for (let i = 0; i < m - n; i++) {
            fp = fp.next;
        }
    }

    while (fp !== null) {
        if (fp === sp) {
            return sp;
        } else {
            fp = fp.next;
            sp = sp.next;
        }
    }

    return null;
}

function findLength(head) {
    let current = head;
    let length = 0;

    while (current !== null) {
        current = current.next;
        length++;
    }
    return length;
}

// TC = O(m + n)
// SC = O(1)