function mergeSortedList(list1, list2) {
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }

  if (list1.val <= list2.val) {
    list1.next = mergeSortedList(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeSortedList(list1, list2.next);
    return list2;
  }
}

// TC = O(n+m)
// SC = O(n)